import React, { use, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ToolsSection({ toolPromise, cart, setCart }) {
  const [activeTab, setActiveTab] = useState('products');
  
  let productsData = use(toolPromise);
  if (!productsData) {
    productsData = [];
  }
  

  function handleAddToCart(product) {
    const alreadyInCart = cart.some(item => item.id === product.id);

    if (alreadyInCart === false) {
      // Adding the new product to the cart array
      setCart([...cart, product]);
      toast.success(product.name + " added to cart!");
    } else {
      toast.info(product.name + " is already in your cart.");
    }
  }

  function handleRemoveFromCart(productId) {
    const newCart = cart.filter(item => item.id !== productId);
    
    setCart(newCart);
    toast.error("Item removed from cart.");
  }

  function handleCheckout() {
    if (cart.length > 0) {
      
      setCart([]); 
      toast.success("Checkout successful! Thank you for your purchase.");
      setActiveTab("products"); 
    }
  }

  const cartTotal = cart.reduce((total, item) => {
  return total + item.price;
}, 0);

  function checkIfInCart(productId) {
  return cart.some(item => item.id === productId);
}

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-[40px] font-bold text-[#1a1c29] mb-4">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Choose from our curated collection of premium digital products designed
            <br className="hidden md:block" />
            to boost your productivity and creativity.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div
            role="tablist"
            className="inline-flex rounded-full border border-gray-100 bg-white p-1.5 shadow-sm"
          >
            <button
              role="tab"
              onClick={() => setActiveTab('products')}
              className={`rounded-full px-8 h-[42px] text-[15px] font-medium transition-colors ${
                activeTab === 'products'
                  ? 'bg-[#7b2ff7] text-white shadow-md shadow-purple-500/20'
                  : 'bg-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Products
            </button>
            <button
              role="tab"
              onClick={() => setActiveTab('cart')}
              className={`rounded-full px-8 h-[42px] text-[15px] font-medium  ${
                activeTab === 'cart'
                  ? 'bg-[#7b2ff7] text-white shadow-md shadow-purple-500/20'
                  : 'bg-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* Conditional Rendering based on the Active Tab state */}
        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <ProductCard 
                 key={product.id} 
                 data={product} 
                 onAdd={() => handleAddToCart(product)}
                 isInCart={checkIfInCart(product.id)}
              />
            ))}
            
            {productsData.length === 0 && (
              <div className="col-span-full flex items-center justify-center py-24 border-2 border-dashed border-gray-200 rounded-[24px] bg-gray-50 text-gray-400 font-medium">
                [ Products List ]
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm min-h-[300px]">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-gray-400">
                <span className="text-4xl mb-4">🛒</span>
                <p className="font-medium text-lg">Your cart is currently empty.</p>
                
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-[#1a1c29] mb-6">Your Cart</h3>
                
                <div className="space-y-4 mb-8">
                  {cart.map((item) => (
                    <div key={`cart-${item.id}`} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm text-xl border border-gray-100">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1a1c29] block leading-tight">{item.name}</h4>
                          <span className="text-sm text-gray-500 capitalize">{item.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <span className="font-bold text-[#1a1c29]">${item.price}</span>
                        <button 
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                          aria-label="Remove item"
                        >
                          <DeleteIcon />
                        </button>
                      </div>

                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mb-8">
                  <span className="text-lg font-semibold text-gray-600">Total</span>
                  <span className="text-3xl font-bold text-[#1a1c29]">${cartTotal}</span>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full justify-center px-12 bg-[#7b2ff7] hover:bg-[#000000] text-white font-semibold text-lg py-4 rounded-full  ml-auto flex"
                >
                  Checkout Now
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <ToastContainer 
         position="bottom-right"
         autoClose={3000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         drvaggable
         pauseOnHover
         theme="light"
      />
    </section>
  );
}

/**
 * Maps standard tag string keys to specific Tailwind CSS background and text color utility classes.
 */
const badgeColors = {
  'new': 'bg-[#d1fae5] text-[#047857]',
  'popular': 'bg-[#e0e7ff] text-[#4338ca]',
  'best seller': 'bg-[#fef0c7] text-[#b45309]'
};


function ProductCard({ data, onAdd, isInCart }) {
  let tagType = "";
  if (data.tagType) {
    tagType = data.tagType.toLowerCase();
  }

  let buttonClasses = "w-full font-semibold text-[15px] py-4 rounded-full mt-auto transition-colors ";
  if (isInCart === true) {
    buttonClasses = buttonClasses + "bg-gray-100 text-gray-800 cursor-default";
  } else {
    buttonClasses = buttonClasses + "bg-[#8b2eff] hover:bg-[#7b22eb] text-white";
  }

  return (
    <div className="relative bg-white border border-gray-100 rounded-[24px] p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50/50 text-3xl shadow-sm">
          {data.icon}
        </div>

        
          <span className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize ${badgeColors[tagType] || 'bg-gray-100 text-gray-800'}`}>
            {data.tag}
          </span>
        
      </div>

      <h3 className="text-2xl font-bold text-[#1a1c29] mb-3">{data.name}</h3>
      <p className="text-[#6b7280] leading-relaxed mb-6">{data.description}</p>

      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-[40px] font-bold text-[#1a1c29] ">${data.price}</span>
        <span className="text-[#6b7280] text-lg font-medium capitalize">/{data.period}</span>
      </div>

      <ul className="space-y-3.5 mb-8 flex-1">
        {data.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-[#4b5563] text-[15px]">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={onAdd}
        className={buttonClasses}
      >
        {isInCart ? 'Added to Cart' : 'Buy Now'}
      </button>
    </div>
  );
}


function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}


function DeleteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
      <path d="M3 6h18"></path>
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
    </svg>
  );
}