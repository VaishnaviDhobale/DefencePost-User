import React, { useRef, useEffect } from 'react'
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Stack, Spinner, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Divider, Text } from '@chakra-ui/react'
import { AiOutlineZoomIn, AiOutlineZoomOut, AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { Icon } from '@chakra-ui/icons';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useLocation } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import { baseUrl } from "../BaseUrl";
import axios from "axios";

function PreviewPDF() {
    const location = useLocation();
    const [numPages, setNumPages] = useState();
    const [pageScale, setPageScale] = useState(1.5);
    const [currentPage, setCurrentPage] = useState(1);
    const [numPagesLoaded, setNumPagesLoaded] = useState(0);
    const [pdfData, setPDFData] = useState(null);
    const pagesRef = useRef([]);
    const handle = useFullScreenHandle();

    const token = JSON.parse(
        localStorage.getItem("DefencePostUserDetails")
    )?.token;

    const getPDFData = async () => {
        try {
            let myCourseData = await axios.get(`${baseUrl}/file-upload/geturl/${location.state.name}`, {
                headers: {
                    token: token,
                    "Content-Type": "application/json",
                },
            });
            console.log("pdf data ==> ", myCourseData);
            setPDFData(myCourseData?.data);
            console.log(myCourseData?.data ,"data is here")
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getPDFData();
    }, [])

    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

    function onDocumentLoadSuccess(pdfInfo) {
        setNumPages(pdfInfo.numPages);
    }

    function onPageChange(pageNumber) {
        setCurrentPage(pageNumber);
        if (pageNumber !== "" && pageNumber > 0 && parseInt(pageNumber) <= numPages) {
            pagesRef.current[parseInt(pageNumber)].scrollIntoView();
        }
    }

    function onPageScaleChange(isZoomIn = true) {
        if (isZoomIn) {
            setPageScale(pageScale + 0.1);
        } else {
            setPageScale(pageScale - 0.1);
        }
    }

    function onFullScreenModChange() {
        if (handle.active) {
            handle.exit();
        } else {
            handle.enter();
        }
    }

    function onPageViewChange(inView, pageNum) {
        if (inView && numPagesLoaded >= 1) {
            setCurrentPage(pageNum);
        }
    }

    return (
        <>
            <FullScreen handle={handle}>
                <div className="pdfViewer-toolBar">
                    {/* update {name} with {location.state.name} */}
                    <Text as='b' fontSize='2xl' style={{ position: "absolute", left: 20, align: "center", fontFamily: "Barlow" }}>{name}</Text>
                    <Stack direction='row' spacing={4} align='center' >
                        <Button backgroundColor={"#29a4de"} variant='solid' onClick={() => onPageScaleChange()}>
                            <Icon as={AiOutlineZoomIn} color={"white"} />
                        </Button>
                        <Button backgroundColor={"#29a4de"} variant='solid' onClick={() => onPageScaleChange(false)}>
                            <Icon as={AiOutlineZoomOut} color={"white"} />
                        </Button>
                        <Divider orientation='vertical' />
                        <NumberInput
                            defaultValue={1}
                            min={1}
                            max={numPages}
                            value={currentPage}
                            style={{ textAlign: "center", width: "80px" }}
                            onChange={onPageChange}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <h6>/ {numPages}</h6>
                        <Divider orientation='vertical' />
                        <Button onClick={onFullScreenModChange} backgroundColor={"#29a4de"} variant='solid'>
                            <Icon as={handle.active ? AiOutlineFullscreenExit : AiOutlineFullscreen} color={"white"} />
                        </Button>
                    </Stack>
                </div>

                {pdfData ? (
                    <div style={{ marginTop: "50px" }}>
                        <Document
                            file={`https://defencepost.s3.amazonaws.com/${pdfData?.fileName}?AWSAccessKeyId=${pdfData?.accessKeyId}&Expires=${pdfData?.expires}&Signature=${pdfData?.signature}`}
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={<Spinner size='md' />}
                        >
                            {[...Array(numPages)].map((x, i) =>
                                <div
                                    ref={el => { if (el) { pagesRef.current[i + 1] = el } }}
                                    key={i}
                                >
                                    <InView
                                        as="div"
                                        threshold={0.25}
                                        onChange={(inView, entry) => { onPageViewChange(inView, i + 1) }}
                                    >
                                        <Page
                                            pageNumber={i + 1}
                                            renderAnnotationLayer={false}
                                            renderTextLayer={false}
                                            scale={pageScale}
                                            loading={<Spinner size='md' />}
                                            onRenderSuccess={() => setNumPagesLoaded(numPagesLoaded + 1)}
                                        />
                                    </InView>
                                </div>
                            )}
                        </Document >
                    </div>
                ) : (<Spinner size='md' />)}
            </FullScreen>
        </>
    )
}

export default PreviewPDF;
