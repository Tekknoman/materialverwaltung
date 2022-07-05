git fetch
git branch -r | grep -v '\->' | sed 's|origin/||g' | sed 's| ||g' > /tmp/branches.txt

#generate html file with url to all branches
echo "<html><body>" > /tmp/index.html
echo "<h1>All Builds</h1>" >> /tmp/index.html
echo "<ul>" >> /tmp/index.html
for branch in `cat /tmp/branches.txt`; do
  echo "<li><a href='/$branch'>$branch</a></li>" >> /tmp/index.html
done
echo "</ul>" >> /tmp/index.html
echo "</body></html>" >> /tmp/index.html

cat /tmp/index.html > index.html
