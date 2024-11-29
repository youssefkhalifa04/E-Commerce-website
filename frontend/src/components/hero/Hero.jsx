import LatestCollection from "./LatestCollection";
export const Hero = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
 
    const handleResize = () => {
      setScreenSize(window.innerWidth);
      
    };


    window.addEventListener("resize", handleResize);


    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const c1 = screenSize > 1023 ? "cadre p-24 shadow-lg flex items-center justify-center  w-5/6": "cadre pr-16 pb-16 mt-36 shadow-lg flex flex-col items-center  justify-center gap-6 rounded-lg space-x-20 bg-transparente w-full";
  const c2 = screenSize > 1023 ? "w-1/3 flex justify-center" : " " ;

  return (
    <div className="hero min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className={c1}>
        <div className="hero-text w-1/3 h-1/3">
          <h3 className="text-2xl ">----- OUR BESTSELLERS</h3>
          <h1 className="text-5xl font-extrabold tracking-wide text-center p-6 b rounded-lg ">Latest Arrivals</h1>
          <h3 className="text-2xl "> SHOP NOW------</h3>
        </div>
        

        <div className={c2}>
          <img src={img1} alt="Hero"  />
        </div>
        
      </div>
    </div>
    

  );
};
