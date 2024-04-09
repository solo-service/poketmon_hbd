import { useNavigate } from "react-router-dom";
import CricleBtn from "../../components/common/Btn/CircleBtn";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { useAppSelector } from "../../store/store"
import { Box, CompleteLayout, FullHeight, LoadingLayout } from "./style";
import { MoonLoader } from "react-spinners";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Complete() {

  const pokemon = useAppSelector(state=>state.pokeSlice);
  const navigate = useNavigate();

  const pokemonRef = useRef(null);

  useGSAP(()=>{

    if(!pokemonRef.current) return;

    gsap.to(pokemonRef.current, {
      y : -10,
      yoyo:true,
      repeat:-1, 
      duration : 0.8,
      ease : "bounce.in"
    }); 

  },[pokemonRef])

  return (
    <CompleteLayout>
      <Header/>
      <FullHeight>
        <Box>
          <>
            {
              pokemon.error ?
                <>
                  <p>{pokemon.error}</p>
                  <CricleBtn 
                    type="button" 
                    label="다시하기"
                    onClick={()=>navigate('/')}
                  />
                </>
              :
              pokemon.loading ?
                <LoadingLayout>
                  <MoonLoader 
                    size={50} 
                    color="#1BDC7F"
                    speedMultiplier={1}
                  />
                </LoadingLayout>
              :
              <>
                <h4><span>{pokemon.data?.user_name}</span>님은</h4>
                <div ref={pokemonRef}>
                  <img src={pokemon.data?.pokemon.sprites.front_default} alt={pokemon.data?.pokemon.korean_name} />
                </div>
                <dl>
                  <dt>{pokemon.data?.pokemon.korean_name}</dt>
                  <dd>입니다</dd>
                </dl>
                <CricleBtn 
                  type="button" 
                  label="다시하기"
                  onClick={()=>navigate('/')}
                />
              </>
            }
          </>
        </Box>
      </FullHeight>
      <Footer/>
    </CompleteLayout>
  )
}

export default Complete