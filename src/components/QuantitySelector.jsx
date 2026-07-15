export default function QuantitySelector({ value, onChange, label }) {
  const decrease = () => onChange(Math.max(1, value - 1));
  const increase = () => onChange(value + 1);

  return (
    <div className="selector-group">
      <span className="selector-label">{label}</span>
      <div className="quantity-selector">
        <button type="button" onClick={decrease} aria-label="Decrease quantity">−</button>
        <output>{value}</output>
        <button type="button" onClick={increase} aria-label="Increase quantity">+</button>
      </div>
    </div>
  );
}
