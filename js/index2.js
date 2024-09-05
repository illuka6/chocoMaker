function scaleContainer() {
    const container = document.getElementById('CLASSIC');
    const box1 = document.getElementById('section_classic');
    const containerWidth = container.offsetWidth;

//     // 如果窗口宽度小于600px，计算缩放比例
//     if (window.innerWidth < 1920) {
//         const scaleRatio = window.innerWidth / 1920;
//         box1.style.transform = translate(-50%, -50%) scale(${scaleRatio});
//     } else {
//         // 还原缩放
//         box1.style.transform = 'translate(-50%, -50%) scale(1)';
//     }
// }

            const containerHeight = container.offsetHeight;
            const box1Width = box1.offsetWidth;
            const box1Height = box1.offsetHeight;

            // Calculate the scale ratio to fit box1 within the container
            const scaleX = containerWidth / box1Width;
            const scaleY = containerHeight / box1Height;
            const scaleRatio = Math.min(scaleX, scaleY); // To keep the aspect ratio

            // Apply scaling to box1
            box1.style.transform = `translate(-50%, -50%) scale(${scaleRatio})`;
        }

        // Call the function on load and resize
        window.addEventListener('resize', scaleContainer);
        window.addEventListener('load', scaleContainer);

        /* quality */

        
       // 將字串拆分為單個字母並插入 HTML
       const textElement = document.getElementById('quality');
       const textContent = 'QUALITY';
       textElement.innerHTML = textContent.split('').map(char => `<span>${char}</span>`).join('');

       // 函數：為每個字母設置動畫延遲
       function setAnimationDelays() {
           const spans = document.querySelectorAll('#quality span');
           spans.forEach((span, index) => {
               // 設置每個字母的動畫延遲
               span.style.animationDelay = `${index * .2}s`; // 每個字母延遲 2 秒
           });
       }

       // 觸發字母翻轉動畫
       function triggerAnimation() {
           const spans = document.querySelectorAll('#quality span');
           spans.forEach(span => span.classList.add('flip'));
       }

       // 設置動畫延遲並觸發動畫
       setAnimationDelays();
       // 假設你希望動畫在滾動到一定位置時觸發
       window.addEventListener('scroll', () => {
           const rect = textElement.getBoundingClientRect();
           const windowHeight = window.innerHeight;

           // 如果文本區域在視窗中，觸發動畫
           if (rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2) {
               triggerAnimation();
           }
       });