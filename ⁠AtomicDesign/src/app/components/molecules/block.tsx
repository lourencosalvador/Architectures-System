import { Buttom } from "../atoms/buttom";
import { TitleIntro } from "../atoms/title-intro";

export function Block(){
    return(
        <div>
            <img src="..." alt="" />
            <TitleIntro title="hello"/>
            <div>
                <span>Começar</span> <Buttom />
            </div>
        </div>
    )
}