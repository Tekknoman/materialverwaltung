git branch -r | grep -v '\->' | sed 's|origin/||g' | sed 's| ||g' > /tmp/branches.txt
echo "Branches:"
cat /tmp/branches.txt
find . -type d -print | grep -v 'node_modules' | grep -v '.git' | grep -v 'js' | grep -v 'css' | sed 's/\.\///g' > /tmp/dirs.txt
echo "Dirs:"
cat /tmp/dirs.txt
comm --nocheck-order -13 /tmp/branches.txt /tmp/dirs.txt > /tmp/unused.txt
echo "Unused:"
cat /tmp/unused.txt


while read line; do
  echo "Removing $line"
#  rm -rf $line
done < /tmp/unused-filtered.txt
echo "Removing temporary files"
rm /tmp/branches.txt /tmp/dirs.txt /tmp/unused.txt
#ls -la