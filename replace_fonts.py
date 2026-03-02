
import os

file_path = '/Volumes/工作文件/听脑AI/官网首页/官网交互演示 2/src/imports/首页第四版最新.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ("font-['HarmonyOS_Sans_SC:Medium',sans-serif]", "font-harmony font-medium"),
    ("font-['HarmonyOS_Sans_SC:Regular',sans-serif]", "font-harmony font-normal"),
    ("font-['HarmonyOS_Sans_SC:Bold',sans-serif]", "font-harmony font-bold"),
    ("font-['PingFang_SC:Medium',sans-serif]", "font-pingfang font-medium"),
    ("font-['PingFang_SC:Regular',sans-serif]", "font-pingfang font-normal"),
]

for old, new in replacements:
    content = content.replace(old, new)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replacement complete.")
