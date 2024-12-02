function toggleItem(category, item) {
    const layer = document.querySelector(`.${category}-layer`);
    
    // If this item is already active, remove it
    if (activeItems[category] === item) {
        layer.style.display = 'none';
        layer.style.background = 'none';
        activeItems[category] = null;
    } else {
        // Otherwise, apply the new item
        layer.style.display = 'block';
        if (category === 'background') {
            layer.style.background = `url(assets/images/backgrounds/${item})`;
            layer.style.backgroundSize = 'cover';
            layer.style.backgroundPosition = 'center';
        } else {
            layer.src = `assets/images/${category}s/${item}`;
        }
        activeItems[category] = item;
    }
}

function resetCharacter() {
    const backgroundLayer = document.querySelector('.background-layer');
    backgroundLayer.style.display = 'block';
    backgroundLayer.style.background = "url('assets/images/backgrounds/whitebg.png')";
    backgroundLayer.style.backgroundSize = 'cover';
    backgroundLayer.style.backgroundPosition = 'center';
    
    document.querySelector('.hands-layer').src = '';
    document.querySelector('.clothing-layer').src = '';
    document.querySelector('.hat-layer').src = '';
    
    activeItems.background = 'whitebg.png';
    activeItems.hands = null;
    activeItems.clothing = null;
    activeItems.hat = null;
}
