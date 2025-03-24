import './styles.css'
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import { ProductDTO } from '../../../models/product';

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
export default function Catalog(){
    return(
        <>
        <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar/>
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
          </div>
          <ButtonNextPage/>
        </section>
      </main>
      </>
    );
}