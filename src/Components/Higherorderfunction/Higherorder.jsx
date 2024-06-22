// Higher-Order Component
function withLoading(Component) {

  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      );
    }
    return <Component {...props} />;
  };
}

// Sample Card Component
const CardComponent = ({ image, title, description, info }) => (
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <div className="card-title">{title}</div>
          <p className="card-description">{description}</p>
          <div className="card-info">{info}</div>
        </div>
      </div>
    );
    
    // Enhanced Component with Loading functionality
    const CardWithLoading = withLoading(CardComponent)
    
    // Usage example
    export const Higherorder = () => {
      return (
        <div className="app-container">
          <CardWithLoading
            isLoading={false}
            image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e"
            title="Delicious Pizza"
            description="A delightful combination of cheese, tomatoes, and basil."
            info="Delivery: 30-40 min | $12.99"
          />
        </div>
      );
    };
    