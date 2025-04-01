import './styles.css'
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import ButtonPrimarymary from '../../../components/ButtonPrimary';
import ButtonInverseerse from '../../../components/ButtonInverse'
import * as productService from '../../../services/product-service'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ProductDetails(){

const params = useParams();
const product = productService.findById(Number(params.producId));

    return(
           <>
            <main>
              <section id="product-details-section" className="dsc-container">
                { product && <ProductDetailsCard product={product}/>}
                <div className="dsc-btn-page-container">
                   <ButtonPrimarymary text='Comprar'/>
                   <Link to={"/"}><ButtonInverseerse text='Início'/></Link>
                </div>
              </section>
            </main>
            </>
    )
}