// import cinProduct from '../images/cinProduct.jpg';
import product1 from '../images/product1.jpeg';

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Our Products</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-12 col-md-3 product-card'>
                  {' '}
                  {/* <i className={d.icon}></i> */}
                  <img src={product1} className="prduct-image"/>
                  <h3>{`Product Name`}</h3>
                  <p className="product-card-description">{`Product Description lasdlasldla sadsaldasl da asdl asdlasldsald aslsad lsad saldsaldlasdl sadl`}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
