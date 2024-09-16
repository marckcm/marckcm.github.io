

const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar_mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});


// gerar pdf -------->

async function generatePDF() {
  const { jsPDF } = window.jspdf;
  const element = document.getElementById('content');

  // Usando html2canvas para converter o HTML em uma imagem
  html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // Define o tamanho do PDF (A4)
      const imgWidth = 210; // Largura da página em mm
      const pageHeight = 295; // Altura da página em mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
      }

      pdf.save('curriculo.pdf'); // Salva o PDF com o nome "curriculo.pdf"
  });
}
