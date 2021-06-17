import AutoCompl from "./Autocomplete"
import codeAddress from "./Geocod";
const Main = () =>
    <div className="user-nav">
        <div className="begin">
            <input type="text" placeholder="начало маршрута" />
            {/* <AutoCompl /> */}
            {/* <input name="1" placeholder="Начальная точка маршрута" point="[object Object]" couriertype="car" topswitcher="route" points="[object Object]" waybillpoints="[object Object]" waybillarray="" currentlocation="40,80" id="1" class="Input" type="text" value=""></input> */}
        </div>
        <div className="finish">
            <input type="text" placeholder="пункт назначения" />

        </div>

        <input id="address" type="textbox" value="Sydney, NSW" />
        <input type="button" value="Encode" onClick={codeAddress} />

        <button className="Route">Построить маршрут</button>
    </div>
export default Main;