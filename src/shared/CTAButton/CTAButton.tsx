import './CTAButton.css';

interface CTAButtonProps {
  buttonText?: string;
  studentCount?: string;
  studentText?: string;
  groupIconSrc?: string;
  groupIconAlt?: string;
  onClick?: () => void;
}

const CTAButton = ({
  buttonText = "JOIN THE REAL WORLD",
  studentCount = "113,000+",
  studentText = "like-minded students",
  groupIconSrc = "/group.svg",
  groupIconAlt = "Group of students",
  onClick
}: CTAButtonProps) => {
  return (
    <div className="cta-section">
      {/* CTA Button */}
      <button
        className="cta-button font-bold py-3 px-8 w-2/12 rounded-lg transition-all duration-300 transform hover:scale-115 shadow-lg hover:shadow-xl whitespace-nowrap"
        onClick={onClick}
      >
        <span
          className="font-extrabold text-lg uppercase text-slate-900 text-center block"
          style={{ letterSpacing: '1.2px' }}
        >
          {buttonText}
        </span>
      </button>


      {/* Student Count */}
      <div className='cta-student-count flex items-center justify-center gap-2 mt-1'>
        <img src={groupIconSrc} alt={groupIconAlt} className='' />
        <p className="cta-student-text text-center text-sm">
          Join {studentCount} {studentText}
        </p>
      </div>
    </div>
  );
};

export default CTAButton;
