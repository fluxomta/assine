document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.substitute-product').forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const currentProductId = e.target.getAttribute('data-current-product-id');
            const upsellProductId = e.target.getAttribute('data-upsell-product-id');

            // Enviando a requisição AJAX para substituir o produto no carrinho
            jQuery.ajax({
                url: wc_add_to_cart_params.ajax_url,
                type: 'POST',
                data: {
                    action: 'substitute_product_in_cart',
                    current_product_id: currentProductId,
                    upsell_product_id: upsellProductId
                },
                success: function (response) {
                    if (response.success) {
                        location.reload(); // Recarrega a página para refletir as mudanças no carrinho
                    } else {
                        alert('Erro ao substituir o produto no carrinho.');
                    }
                }
            });
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const personTypeSelect = document.getElementById('billing_persontype');
    const companyField = document.getElementById('billing_company_field');
    const cnpjField = document.getElementById('billing_cnpj_field');
    const cpfField = document.getElementById('billing_cpf_field');

    function toggleFieldsBasedOnPersonType() {
        const selectedPersonType = personTypeSelect.value;

        if (selectedPersonType === '2') { // Pessoa Jurídica
            companyField.style.display = 'block';
            cnpjField.style.display = 'block';
            cpfField.style.display = 'none'; // Ocultar campo CPF
        } else if (selectedPersonType === '1') { // Pessoa Física
            companyField.style.display = 'none';
            cnpjField.style.display = 'none';
            cpfField.style.display = 'block'; // Mostrar campo CPF
        }
    }

    // Inicializar a visibilidade dos campos com base no valor atual
    toggleFieldsBasedOnPersonType();

    // Adicionar evento ao select Tipo de Pessoa
    personTypeSelect.addEventListener('change', toggleFieldsBasedOnPersonType);
});


