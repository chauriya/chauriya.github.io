import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const downloadResumeAsPDF = async () => {
  try {
    const element = document.getElementById('resume-content');
    if (!element) {
      throw new Error('Resume content not found');
    }

    // Wait for images to load
    const images = Array.from(element.getElementsByTagName('img'));
    await Promise.all(images.map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    }));

    // Apply PDF-specific styles before capturing
    document.body.classList.add('generating-pdf');

    // Configure html2canvas with optimized settings
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false, // Disable logging
      imageTimeout: 30000, // Increase timeout for images
      // More precise dimensions
      width: element.offsetWidth,
      height: element.offsetHeight,
      // Improved margins
      x: 0,
      y: 0,
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      // Better rendering
      foreignObjectRendering: true,
      removeContainer: true,
      // Improved image handling
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.getElementById('resume-content');
        if (clonedElement) {
          // Remove footer from cloned document to prevent repetition
          const footer = clonedElement.querySelector('footer');
          if (footer) {
            footer.style.display = 'none';
          }
        }
      }
    });

    // A4 measurements in points (72 points per inch)
    const pageWidth = 595.28; // A4 width in points
    const pageHeight = 841.89; // A4 height in points
    
    // Calculate margins
    const margin = 40; // points
    const contentWidth = pageWidth - (2 * margin);
    const contentHeight = pageHeight - (2 * margin);
    
    // Calculate scale to fit width while maintaining aspect ratio
    const scale = contentWidth / canvas.width;
    const scaledHeight = canvas.height * scale;
    
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4',
      compress: true
    });

    // Calculate number of pages needed
    const totalPages = Math.ceil(scaledHeight / contentHeight);

    // Add pages and split content
    for (let page = 0; page < totalPages; page++) {
      if (page > 0) {
        pdf.addPage();
      }

      // Calculate position for current page
      const yPosition = -(page * contentHeight / scale);

      // Add image for current page
      pdf.addImage(
        canvas.toDataURL('image/jpeg', 0.95), // Slightly reduced quality for better performance
        'JPEG',
        margin,
        margin + yPosition * scale,
        contentWidth,
        scaledHeight
      );
    }

    // Remove PDF-specific styles
    document.body.classList.remove('generating-pdf');

    // Save with formatted name
    pdf.save('Aditya_Chitmitwar_Resume.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please try again.');
    document.body.classList.remove('generating-pdf');
  }
};