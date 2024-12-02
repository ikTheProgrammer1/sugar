import html2canvas from 'html2canvas';

export const downloadCharacter = async () => {
  const element = document.querySelector('.character-frame');
  if (!element) return;
  
  const canvas = await html2canvas(element);
  const link = document.createElement('a');
  link.download = 'my-character.png';
  link.href = canvas.toDataURL();
  link.click();
};
