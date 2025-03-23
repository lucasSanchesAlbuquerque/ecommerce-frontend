import './styles.css'
import HeaderClientnt from '../../components/HeaderClient';
import ProductDetailsCard from '../../components/ProductDetailsCard';
import ButtonPrimarymary from '../../components/ButtonPrimary';
import ButtonInverseerse from '../../components/ButtonInverse'

export default function ProductDetails(){

    return(
           <>
            <HeaderClientnt/>
            <main>
              <section id="product-details-section" className="dsc-container">
                <ProductDetailsCard/>
                <div className="dsc-btn-page-container">
                   <ButtonPrimarymary/>
                   <ButtonInverseerse/>
                </div>
              </section>
            </main>
            </>
    )
}