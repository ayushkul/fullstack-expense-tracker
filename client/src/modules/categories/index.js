import TableComponent from "../../common/components/TableComponent";
import styled, {css} from "styled-components";
import {Dialog} from "@material-ui/core";
import {useContext, useEffect, useState} from "react";
import CustomButton from "../../common/components/CustomButton";
import services from "../../services";
import Utils from "../../utility";
import {AppContext} from "../../routes";

export const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`
export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  border-radius: 8px;
  border: solid 1px #ebebeb;
  padding: 5px 10px;
  align-items: center;
  justify-content: space-between;
`;
export const SearchInput = styled.input`
  font-size: 16px;
  font-weight: 300;
  text-align: left;
  outline: none;
  border: none;
`;
export const SearchIcon = styled.img`
  height: 13px;
  width: 13px;
`;
const AddCategoryForm = (props) => {
    const {selectedCategory} = props
    const [name, setCategory] = useState(selectedCategory?.name);
    const user = useContext(AppContext);

    const addCategory = async () => {
        let error, response
        if (selectedCategory) {
            [error, response] = await Utils.parseResponse(services.updateCategory({
                categoryId: selectedCategory._id,
                name,
                userId: user._id
            }))
        } else {
            [error, response] = await Utils.parseResponse(services.addCategory({
                name, user: user._id
            }))
        }
        if (error) {
            Utils.consoleLogger("AddCategoryForm", error)
            return Utils.apiFailureToast(selectedCategory ? "Unable to update Category" : "Unable to add Category")
        }
        props.toggleDialog(false)
        return Utils.apiSuccessToast(selectedCategory ? "Category updated successfully" : "Category added successfully")
    }

    return (
        <div className="p-3 display-flex-column ">
            <span className="fw-700 fs-20">{selectedCategory ? "Update " : "Add "} Category</span>
            <div className="mt-3 display-flex-row jc-space-between align-items-center">
                <span>Name</span>
                <input placeholder="Enter Name" className="p-1 outline-none"
                       value={name} onChange={(e) => setCategory(e.target.value)}/>
            </div>
            <div className="mt-4 display-flex-row justify-content-end" style={{gap: "20px"}}>
                <CustomButton text={selectedCategory ? "Update" : "Save"} onClick={addCategory}/>
                <CustomButton text="Cancel" onClick={() => props.toggleDialog(false)}/>
            </div>
        </div>
    )
}

const Categories = () => {
    const [isOpen, setOpen] = useState(false)
    const [selectedCategory, selectCategory] = useState(false)
    const [categoryList, setCategoryList] = useState([])
    const user = useContext(AppContext);

    useEffect(async () => {
        const [error, response] = await Utils.parseResponse(services.getCategoryList(user._id))
        if (error) {
            Utils.consoleLogger("AddCategoryForm", error)
            return Utils.apiFailureToast("Unable to get Category List")
        }
        setCategoryList(response)
    }, [isOpen])
    const editCategory = (data) => {
        setOpen(true)
        selectCategory(data)
    }
    return (
        <>
            <Dialog
                fullWidth={true}
                open={isOpen}
                onClose={() => setOpen(false)}>
                <AddCategoryForm toggleDialog={setOpen} selectedCategory={selectedCategory}/>
            </Dialog>
            <div className="display-flex-column p-3 w-100">
                <div className="display-flex-row justify-content-sm-between mt-3 ">
                    <SearchBox>
                        <SearchInput placeholder="Search"/>
                        <SearchIcon src="/images/search-icon.svg"/>
                    </SearchBox>
                    <span onClick={() => setOpen(true)}
                          className="bg-azure fc-white br-12 px-3 py-1 text-align-center cursor-pointer card-shadow">
                        + Add Category
                    </span>
                </div>
                <TableComponent.Table cellpadding="0" cellspacing="0">
                    <TableComponent.TableHead>
                        <TableComponent.HeadColumn>Category Name</TableComponent.HeadColumn>
                        <TableComponent.HeadColumn>Transaction Count</TableComponent.HeadColumn>
                        <TableComponent.HeadColumn/>
                    </TableComponent.TableHead>
                    <TableComponent.TableBody>
                        {categoryList?.map((category) => <TableComponent.BodyRow>
                            <TableComponent.BodyColumn>
                                {category.name}
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                0
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                <DeleteIcon src="/images/edit.png" onClick={() => editCategory(category)}/>
                            </TableComponent.BodyColumn>
                        </TableComponent.BodyRow>)}


                    </TableComponent.TableBody>
                </TableComponent.Table>
            </div>
        </>
    )
}
export default Categories;
