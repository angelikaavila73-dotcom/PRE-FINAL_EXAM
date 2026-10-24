const svg =
  "<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'>" +
  "<rect width='100%' height='100%' fill='#dfe3e8'/>" +
  "<text x='50%' y='50%' text-anchor='middle' fill='#888' font-family='Arial' font-size='22'>No Image</text>" +
  "</svg>";

export const placeholderImage = "data:image/svg+xml," + encodeURIComponent(svg);

export const handleImageError = (e) => {
  e.target.onerror = null;
  e.target.src = placeholderImage;
};
