$document.ready(function () {
  const DISCOUNT_CODE = "DISKON 50%";
  const DISCOUNT_PERCENTAGE = 0.5; // Diskon 50%
});

$('plus-btn').on 'click', function () {
    Let quantityInput = $(this).siblings('.quantity');
    Let currentquantity = parseInt(quantitySpan.text());
    quantitySpan.text(currentQuantity +1)
}