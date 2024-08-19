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