import facebook from "../../assets/fb.png"
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
const FindUsOn = () => {
    return (
        <div className="mt-10">
            <h1 className="font-semibold">Find Us On</h1>
            <div className="flex flex-col *:w-full">
                <button className="btn bg-white rounded-none justify-start"><img src={facebook} alt="" />facebook</button>
                <button className="btn bg-white rounded-none justify-start"><img src={twitter} alt="" />twitter</button>
                <button className="btn bg-white rounded-none justify-start"><img src={instagram} alt="" />instagram</button>
            </div>
        </div>
    );
};

export default FindUsOn;