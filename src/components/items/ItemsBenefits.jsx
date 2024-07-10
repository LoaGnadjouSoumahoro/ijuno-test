const ItemsBenefits = ({ title, text, image }) => {
  return (
    <div className='w-full h-full m-4 flex justify-between  '>
      <div className='w-1/2'>
        <h4>{title}</h4>
        {text}
      </div>
    </div>
  );
};
export default ItemsBenefits;
