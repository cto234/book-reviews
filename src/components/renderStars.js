const renderStars = (score) => {
    const fullStars = Math.floor(score);
    const halfStar = score % 1 !== 0;
    const emptyStars = Math.floor(5 - score);
  
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>&#9733;</span>); // Full star
    }
  
    if (halfStar) {
      stars.push(<span key="half" className="half-star">&#9734;&#xFE0E;</span>); // Half star
    }
  
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`}>&#9734;</span>); // Empty star
    }
  
    return stars;
  };

  export default renderStars