import "./CoderAnim.css"
const BlackSphere = () => {

    return (<div className="container">
        <div className="window">
            <div className="cloud" id="first-cloud"></div>
            <div className="cloud" id="second-cloud"></div>
        </div>
        <div className="small-monitor">
            <div className="bar">
                <div className="button" id="red"></div>
                <div className="button" id="yellow"></div>
                <div className="button" id="green"></div>
            </div>
            <div className="screen">
                <ul className="code">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className="inline-code" id="line-1"></li>
                    <li className="inline-code" id="line-2"></li>
                    <li className="inline-code" id="line-3"></li>
                    <li className="inline-code" id="line-4"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div className="main-monitor">
            <div className="bar">
                <div className="button" id="red"></div>
                <div className="button" id="yellow"></div>
                <div className="button" id="green"></div>
            </div>
            <div className="screen">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div className="avatar">
            <div className="avatar-neck"></div>
            <div className="avatar-collar"></div>
            <div className="avatar-body"></div>
            <div className="avatar-head"></div>
            <div className="avatar-hairband"></div>
            <div className="avatar-hair"></div>
        </div>
    </div>);
}

export default BlackSphere;
