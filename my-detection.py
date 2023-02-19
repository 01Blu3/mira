import jetson.inference
import jetson.utils

'''Real-Time Object Detection'''

# detectNet Object created
# sets resolution that the camera will be operating on
net = jetson.inference.detectNet("ssd-mobilenet-v2",threshold=0.5)
camera = jetson.utils.gstCamera(1280,720,"/dev/video0")

# Open GL Display window to render results
display = jetson.utils.glDisplay()

# Program will remain running until the camera is closed
while display.IsOpen():
	img, width, height = camera.CaptureRGBA()
	detections = net.Detect(img, width, height)
	display.RenderOnce(img,width,height)
	display.SetTitle("Object Detection | Network {:.0f} FPS".format(net.GetNetworkFPS()))

