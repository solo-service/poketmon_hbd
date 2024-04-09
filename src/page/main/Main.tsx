import Footer from "../../components/common/Footer"
import Header from "../../components/common/Header"
import { Box, FullHeight, MainLayout } from "./style"
import Pokeball from "../../asset/image/pokeball/pokeball.jpg";
import CricleBtn from "../../components/common/Btn/CircleBtn";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Main() {

  const navigate = useNavigate();
  const pokeballRef = useRef(null);

  useGSAP(()=>{

    if(!pokeballRef.current) return;

    gsap.fromTo(pokeballRef.current, {
      rotate : 5,
    },{
      rotate : -5,
      yoyo:true, 
      repeat:-1, 
      ease : "power1.inOut" 
    }); 

  },[pokeballRef])

  return (
    <MainLayout>
      <Header/>
        <FullHeight>
        
          <Box>
            <div ref={pokeballRef}>
              <img src={Pokeball} alt="몬스터볼" />
            </div>
            <CricleBtn
              onClick={()=>navigate('/search')}
              label="난 무슨 포켓몬일까?"
            />
          </Box>

        </FullHeight>
      <Footer/>
    </MainLayout>
  )
}

export default Main