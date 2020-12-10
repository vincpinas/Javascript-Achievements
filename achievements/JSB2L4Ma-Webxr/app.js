// voeg controls toe (teleport & WASD controls)
const controls = new Controls(250);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(0, 1.6, -5);
minecraftModel.setScale(0.05, 0.05, 0.05);
minecraftModel.setRotation(0, -36.95, 0);

//create a model
const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(0, 0.91001, -5);
cuberoom.setScale(0.33668, 0.44443, 0.16213);
cuberoom.setRotation(0, -36.95, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-3, 0, -5);

// create some text
const testText = new Text('MAWebXR - Vincent Pinas');
testText.setPosition(-0.970, 2.6, -5.65);
testText.setColor('#D8D8D8')
testText.setRotation(0, -36.95, 0);
testText.setFontsize(1);

// create an image
const image = new XRImage('assets/images/sampleImage.jpg');
image.setPosition(-5, 2.45839, -5);

// create an image
const image2 = new XRImage('assets/images/Lisse-049.jpg');
image2.setPosition(3.023, 2.38244, -3);
image2.setRotation(0, -50, 0)

// create a 360 image
const image360 = new Sky('assets/360_World.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => {
    console.log('je klikt op mij')
    sphere.setColor('red')
});