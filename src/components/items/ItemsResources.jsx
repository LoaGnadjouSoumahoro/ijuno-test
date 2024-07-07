const ItemsResources = () => {
  return (
    <div className='py-[1.5rem] px-[0.75rem] text-center hover:border-solid hover:border-1 hover:border-dark-turquoise'>
      <article className='resources-items'>
        <img src={image} alt='icon license' className='w-[2rem] mb-[1rem]' />
        <h4 className='font-[500]'>{title}</h4>
        <p>{text}</p>
      </article>
    </div>
  );
};
export default ItemsResources;
