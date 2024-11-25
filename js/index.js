document.getElementById('btn-contract').addEventListener('click', function () {
  // Obtener el texto a copiar
  const TEXT = "9XyN8VGngaxCvvyaqLSCkkWyyyHTQjevHwzZ1keGpump";

  // Usar la API Clipboard para copiar
  navigator.clipboard.writeText(TEXT)
    .then(() => {
      // Mostrar mensaje de confirmación
      const btnContract = document.getElementById('btn-contract');
      const btnContractCopied = document.getElementById('btn-contract-copied');
      
      btnContract.classList.add('d-none');
      btnContractCopied.classList.remove('d-none');

      // Ocultar el mensaje después de 2 segundos
      setTimeout(() => {
        btnContract.classList.remove('d-none');
        btnContractCopied.classList.add('d-none');        
      }, 2000);
    })
    .catch(err => {
      console.error('Error al copiar el texto: ', err);
    });
});
