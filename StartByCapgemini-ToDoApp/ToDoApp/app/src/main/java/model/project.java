package model;

import java.util.Date;

public class project {
    
    private int id;
    private String name;
    private String description;
    private Date createAt;
    private Date updatedAt;

    public project(int id, String name, String description, Date createAt, Date updatedAt) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.createAt = createAt;
        this.updatedAt = updatedAt;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public String toString() {
        return "project{" + "id=" + id + ", name=" + name + ", description=" + description + ", createAt=" + createAt + ", updatedAt=" + updatedAt + '}';
    }
    
    
    
    
}
