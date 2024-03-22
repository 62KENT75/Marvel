import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundarie from "../errorBoundarie/ErrorBoundarie";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <>
        <ErrorBoundarie>
            <RandomChar/>
        </ErrorBoundarie>
        <div className="char__content">
            <ErrorBoundarie>
                <CharList onCharSelected={onCharSelected}/>
            </ErrorBoundarie>
            {<ErrorBoundarie>
                <CharInfo charId={selectedChar}/>
            </ErrorBoundarie>}
        </div>
        <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;