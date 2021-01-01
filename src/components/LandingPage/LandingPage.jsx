import './LandingPage.scss';


const LandingPage = () => {
    return (
        <div className='landingpage-container-wrap'>
            <div className='landingpage-title'>
                <h1>Hi, I'm Mehmet :)</h1>
                <div><p className="typewriter"> I write code. </p></div>
                <div className='landingpage-connect'> Connect with me</div>
                <div> <hr style={{ width: '80%' }} /> </div>
            </div>
            <div className='landingpage-introduction'>
                <div className="landingpage-connect-icons">
                    <div className="landingpage-icon"> LinkedIn</div>
                    <div className="landingpage-icon"> Github</div>
                    <div className="landingpage-icon"> Email</div>
                </div>
            </div>
        </div >
    )
};

export default LandingPage;