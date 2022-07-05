git branch -r | grep -v '\->' | sed 's|origin/||g' | sed 's| ||g' > /tmp/branches.txt
find . -type d -print | grep -v 'node_modules' | grep -v '.git' | grep -v 'js' | grep -v 'css' | sed 's/\.\///g' > /tmp/dirs.txt

for dir in `cat /tmp/dirs.txt`; do
  if ! grep -q "$dir" /tmp/branches.txt; then
    echo "Removing $dir"
    rm -rf "$dir"
  fi
done
echo "Removing temporary files"
rm /tmp/branches.txt /tmp/dirs.txt
ls -la