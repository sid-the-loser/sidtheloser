import asyncio

folder_name = "./"
file_ext = ".png"

async def main():
    n = 34
    a = Element("gallery")
    for i in range(n):
        a.element.innerHTML += f'<img class="gallery" id="{i+1}" src="{folder_name}{i+1}{file_ext}">'

asyncio.ensure_future(main())