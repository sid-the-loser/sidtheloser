import os
import time
f = open("log.txt", "a")
f.write(f"\n{time.time()}\n")
x = os.listdir()
count = 1
for i in x:
    x = os.listdir()
    if i.lower().endswith(".jpg") or i.lower().endswith(".png") or i.lower().endswith(".jpeg") or i.lower().endswith(".jpe"):
        while (str(count)+".png") in x:
            count += 1
            print(count)
        os.rename(i, str(count)+".png")
        f.write(f"Converted {i} to {count}.png\n")
        count += 1