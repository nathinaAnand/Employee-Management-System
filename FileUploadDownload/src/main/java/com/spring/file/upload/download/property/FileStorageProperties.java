package com.spring.file.upload.download.property;

import org.springframework.boot.context.properties.ConfigurationProperties;



@ConfigurationProperties(prefix="file")
public class FileStorageProperties {
	
	private String uploadDir;

    public String getUploadDir() {
        return uploadDir;
    }

    public void setUploadDir(String uploadDir) {
        this.uploadDir = uploadDir;
    }

}
