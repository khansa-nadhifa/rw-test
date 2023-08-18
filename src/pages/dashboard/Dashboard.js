import style from "./Dashboard.module.css";

function Dashboard() {
    return (
        <div className={style.body}>
            <div className={style.title}> 
                {/* top */}
                <div>
                    <h1>Dashboard</h1>
                    <p className={style.subtitle}>User Quantity</p>
                </div>
                {/* <div>
                    Go to CRM
                </div> */}
            </div>
            <div>
                {/* middle */}
                <div className={style.middle}>
                    <div className={style.firstSegment}>
                        <div className={style.firstSegmentIcon}>
                            <img src="/user2.png" alt="user"/>
                        </div>
                        <div className={style.firstSegmentContent}>
                            <div className={style.firstSegmentNumber}>
                                <p>9823</p>
                            </div>
                            <div className={style.firstSegmentRole}>
                                <p>User</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.firstSegment}>
                        <div className={style.firstSegmentIcon}>
                            <img src="/borrower.svg" alt="borrower"/>
                        </div>
                        <div className={style.firstSegmentContent}>
                            <div className={style.firstSegmentNumber}>
                                <p>243</p>
                            </div>
                            <div className={style.firstSegmentRole}>
                                <p>Borrower</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.firstSegment}>
                        <div className={style.firstSegmentIcon}>
                            <img src="/loanadvisor.svg" alt="loanadvisor"/>
                        </div>
                        <div className={style.firstSegmentContent}>
                            <div className={style.firstSegmentNumber}>
                                <p>56</p>
                            </div>
                            <div className={style.firstSegmentRole}>
                                <p>Loan Advisor</p>
                            </div>
                        </div>
                    </div>
                    

                    <div className={style.secondSegmentRight}>
                        <div>
                            <div className={style.secondSegment}>
                                <div className={style.secondSegmentIcon}>
                                    <img src="/user.svg" alt="user"/>
                                </div>
                                <div className={style.secondSegmentContent}>
                                    <div className={style.secondSegmentRole}>
                                        Admin Office
                                    </div>
                                    <div className={style.secondSegmentNumber}>
                                        4
                                    </div>
                                </div>
                            </div>
                            <div className={style.secondSegment}>
                                <div className={style.secondSegmentIcon}>
                                    <img src="/user.svg" alt="user"/>
                                </div>
                                <div className={style.secondSegmentContent}>
                                    <div className={style.secondSegmentRole}>
                                        Super Admin
                                    </div>
                                    <div className={style.secondSegmentNumber}>
                                        3
                                    </div>
                                </div>
                            </div>
                            <div className={style.secondSegment}>
                                <div className={style.secondSegmentIcon}>
                                    <img src="/user.svg" alt="user"/>
                                </div>
                                <div className={style.secondSegmentContent}>
                                    <div className={style.secondSegmentRole}>
                                        Bank Officer
                                    </div>
                                    <div className={style.secondSegmentNumber}>
                                        124
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={style.secondSegment}>
                                <div className={style.secondSegmentIcon}>
                                    <img src="/user.svg" alt="user"/>
                                </div>
                                <div className={style.secondSegmentContent}>
                                    <div className={style.secondSegmentRole}>
                                        Principle
                                    </div>
                                    <div className={style.secondSegmentNumber}>
                                        12
                                    </div>
                                </div>
                            </div>
                            <div className={style.secondSegment}>
                                <div className={style.secondSegmentIcon}>
                                    <img src="/user.svg" alt="user"/>
                                </div>
                                <div className={style.secondSegmentContent}>
                                    <div className={style.secondSegmentRole}>
                                        Principle LMI
                                    </div>
                                    <div className={style.secondSegmentNumber}>
                                        11
                                    </div>
                                </div>
                            </div>
                            <div className={style.secondSegment}>
                                <div className={style.secondSegmentIcon}>
                                    <img src="/user.svg" alt="user"/>
                                </div>
                                <div className={style.secondSegmentContent}>
                                    <div className={style.secondSegmentRole}>
                                        Bank Admin
                                    </div>
                                    <div className={style.secondSegmentNumber}>
                                        210
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={style.secondSegment}>
                                <div className={style.secondSegmentIcon}>
                                    <img src="/user.svg" alt="user"/>
                                </div>
                                <div className={style.secondSegmentContent}>
                                    <div className={style.secondSegmentRole}>
                                        Author
                                    </div>
                                    <div className={style.secondSegmentNumber}>
                                        6
                                    </div>
                                </div>
                            </div>
                            <div className={style.secondSegment}>
                                <div className={style.secondSegmentIcon}>
                                    <img src="/user.svg" alt="user"/>
                                </div>
                                <div className={style.secondSegmentContent}>
                                    <div className={style.secondSegmentRole}>
                                        BDE
                                    </div>
                                    <div className={style.secondSegmentNumber}>
                                        7
                                    </div>
                                </div>
                            </div>
                            <div className={style.secondSegment}>
                                <div className={style.secondSegmentIcon}>
                                    <img src="/user.svg" alt="user"/>
                                </div>
                                <div className={style.secondSegmentContent}>
                                    <div className={style.secondSegmentRole}>
                                        Bank Principle
                                    </div>
                                    <div className={style.secondSegmentNumber}>
                                        36
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div> 
                {/* top */}
                <div className={style.title}>
                    <h1>Data & Analytics</h1>
                    <p className={style.subtitle}>Show updates of loan</p>
                </div>
                {/* <div>
                    Go to CRM
                </div> */}
            </div>
            <div className={style.thirdSegment}>
                
                <div className={style.chartsLeft}>
                    {/* left */}
                    <div className={style.chartsLeftTop}>
                        <div className={style.chartsBlueTop}>
                            <img src="/rectangleblue.png" alt="blue line" className={style.chartsBlueLine}/>
                            <div className={style.chartsBlueTopContent}>
                                <p className={style.chartsTopStatus}>Belum diproses</p>
                                <p className={style.chartsTopNumber}>9,123</p>
                            </div>
                            <img src="/bluechart.png" className={style.chartsBlue} alt=""/>
                        </div>
                        <div className={style.chartsBlueTop}>
                            <img src="/rectanglered.png" alt="blue line" className={style.chartsBlueLine}/>
                            <div className={style.chartsBlueTopContent}>
                                <p className={style.chartsTopStatus}>Sudah diproses</p>
                                <p className={style.chartsTopNumber}>9,123</p>
                            </div>
                            <img src="/redchart.png" className={style.chartsBlue} alt=""/>
                        </div>
                    </div>
                    <img src="/underline.png" className={style.chartsUnderlineLeft} alt=""/>
                    <div>
                        <div>
                            <div className={style.belumDiproses}>
                                <div className={style.chartsLeftBottomContent}>
                                    <img src="/belum.png" className={style.chartsLeftBottomIcon} alt=""/>
                                    <p className={style.chartsLeftBottomStatus}>Belum diproses</p>
                                </div>
                                <p className={style.chartsLeftBottomPercent}>43%</p>
                            </div>
                            <div>
                                <img src="/blueline.png" className={style.percentLine} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className={style.belumDiproses}>
                                <div className={style.chartsLeftBottomContent}>
                                    <img src="/sudah.png" className={style.chartsLeftBottomIcon} alt=""/>
                                    <p className={style.chartsLeftBottomStatus}>Sudah diproses</p>
                                </div>
                                <p className={style.chartsLeftBottomPercent}>37%</p>
                            </div>
                            <div>
                                <img src="/redline.png" className={style.percentLine} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={style.chartsRight}>
                    {/* left */}
                    <div className={style.chartsLeftTop}>
                        <div className={style.chartsBlueTop}>
                            <img src="/rectangleyellow.png" alt="yellow line" className={style.chartsBlueLine}/>
                            <div className={style.chartsBlueTopContent}>
                                <p className={style.chartsTopStatus}>Customer</p>
                                <p className={style.chartsTopNumber}>78,623</p>
                            </div>
                            <img src="/yellowchart.png" className={style.chartsBlue} alt=""/>
                        </div>
                    </div>
                    <img src="/underline.png" className={style.chartsUnderlineRight} alt=""/>
                    <div>
                        <div>
                            <div className={style.belumDiproses}>
                                <div className={style.chartsLeftBottomContent}>
                                    <img src="/man.png" className={style.chartsLeftBottomIcon} alt=""/>
                                    <p className={style.chartsLeftBottomStatus}>Pria</p>
                                </div>
                                <p className={style.chartsLeftBottomPercent}>43%</p>
                            </div>
                            <div>
                                <img src="/yellowline1.png" className={style.percentLine} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className={style.belumDiproses}>
                                <div className={style.chartsLeftBottomContent}>
                                    <img src="/woman.png" className={style.chartsLeftBottomIcon} alt=""/>
                                    <p className={style.chartsLeftBottomStatus}>Wanita</p>
                                </div>
                                <p className={style.chartsLeftBottomPercent}>37%</p>
                            </div>
                            <div>
                                <img src="/yellowline2.png" className={style.percentLine} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className={style.chartsRight}>
                    
                    <div className={style.chartsLeftTop}>
                        <div className={style.chartsBlueTop}>
                            <img src="/rectangleyellow.png" alt="yellow line" className={style.chartsBlueLine}/>
                            <div className={style.chartsBlueTopContent}>
                                <p className={style.chartsTopStatus}>Customer</p>
                                <p className={style.chartsTopNumber}>78,623</p>
                            </div>
                            <img src="/yellowchart.png" className={style.chartsBlue} alt=""/>
                        </div>
                        
                    </div>
                    <img src="/underline.png" className={style.chartsUnderlineLeft} alt=""/>
                    <div>
                        <div>
                            <div className={style.belumDiproses}>
                                <div className={style.chartsLeftBottomContent}>
                                    <img src="/man.png" className={style.chartsLeftBottomIcon} alt=""/>
                                    <p className={style.chartsLeftBottomStatus}>Pria</p>
                                </div>
                                <p className={style.chartsLeftBottomPercent}>43%</p>
                            </div>
                            <div>
                                <img src="/yellowline1.png" className={style.percentLine} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className={style.belumDiproses}>
                                <div className={style.chartsLeftBottomContent}>
                                    <img src="/woman.png" className={style.chartsLeftBottomIcon} alt=""/>
                                    <p className={style.chartsLeftBottomStatus}>Wanita</p>
                                </div>
                                <p className={style.chartsLeftBottomPercent}>37%</p>
                            </div>
                            <div>
                                <img src="/yellowline2.png" className={style.percentLine} alt=""/>
                            </div>
                        </div>
                    </div>
                </div> */}


            </div>
        </div>
    )
}

export default Dashboard;
