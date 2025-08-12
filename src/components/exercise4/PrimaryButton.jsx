const PrimaryButton = ({ label = "Submit", disabled }) => {
  return (
    <div>
      <button className="btn btn-secondary" disabled={disabled}>
        {label}
      </button>
    </div>
  );
};

export default PrimaryButton;
