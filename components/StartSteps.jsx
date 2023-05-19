import styles from '../styles';


const StartSteps = ({number ,text}) => (
  <div 
  className={`${styles.flexCenter} flex-row`}>

      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D] `}>
       <p className={`text-[20px] font-bold text-white text-center  `} >
       {number}
       </p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[19px] text-[#B0b0b0]">
      {text}
      </p>   
  </div>
);

export default StartSteps;
