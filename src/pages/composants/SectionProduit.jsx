import CarteProduits from "./CarteProduits"

const SectionProduit = ({ title, items }) => {
    return (
        <div className="my-8">
          <h2 className="mb-6 text-2xl font-bold text-center text-green-600">{title}</h2>
          <div className="flex flex-wrap justify-center">
            {items.map((item, index) => (
              <CarteProduits
                key={index}
                title={item.title}
                image={item.image}
                description={item.description}
                buttonText={item.buttonText}
              />
            ))}
          </div>
        </div>
      );
}

export default SectionProduit
