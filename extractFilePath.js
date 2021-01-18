function extractFilePath(filePath) {
    let fileName = filePath.split('/').pop(),
    	pathName = null;

	// check first character
    if (filePath.charAt(0) == '/') {
        filePath = filePath.substring(1);
    }
    
    // remove file from filePath
    pathName = filePath.replace(fileName, '');
    
    console.log('pathName:', pathName);
    console.log('fileName:', fileName);
}

extractFilePath('/tmp/json/profiles.json');
