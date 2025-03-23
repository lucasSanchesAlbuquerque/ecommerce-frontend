import './styles.css'
import HeaderClientnt from '../../components/HeaderClient';
import ProductDetailsCard from '../../components/ProductDetailsCard';
import ButtonPrimarymary from '../../components/ButtonPrimary';
import ButtonInverseerse from '../../components/ButtonInverse'
import { ProductDTO } from '../../models/product';

const product: ProductDTO ={
  id:2,
  name:"Smat TV",
  description:"TV LCD Ultra Fina",
  imagUrl:"https://raw.githubusercontent.com/devsuperior/dscatalog-resources/refs/heads/master/backend/img/2-big.jpg",
  price:2500.99,
  categories:[
    { id:2,
      name:"eletronicos"
    },
    {
      id:3,
      name:"tv"
    }
  ]
}
export default function ProductDetails(){

    return(
           <>
            <HeaderClientnt/>
            <main>
              <section id="product-details-section" className="dsc-container">
                <ProductDetailsCard product={product}/>
                <div className="dsc-btn-page-container">
                   <ButtonPrimarymary/>
                   <ButtonInverseerse/>
                </div>
              </section>
            </main>
            </>
    )
}