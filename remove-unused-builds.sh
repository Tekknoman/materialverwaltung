git branch -r | grep -v '\->' > /tmp/branches.txt
echo "Branches:"
cat /tmp/branches.txt
find . -type d -print | sed 's/\.\///g' > /tmp/dirs.txt
echo "Dirs:"
cat /tmp/dirs.txt
comm --nocheck-order -23 /tmp/branches.txt /tmp/dirs.txt > /tmp/unused.txt
echo "Unused:"
cat /tmp/unused.txt

while read line; do
  echo "Removing $line"
  rm -rf $line
done < /tmp/unused.txt
echo "Removing temporary files"
rm /tmp/branches.txt /tmp/dirs.txt /tmp/unused.txt
ls -la