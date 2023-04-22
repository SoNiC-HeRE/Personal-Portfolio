import styles from "../styles";

const SkillsInfo = ({number,text}) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#66FCF1]`}>
      <p className="font-bold text-[20px] text-black">0{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-white leading-[32px]">
      {text}
    </p>
  </div>
);

export default SkillsInfo;
