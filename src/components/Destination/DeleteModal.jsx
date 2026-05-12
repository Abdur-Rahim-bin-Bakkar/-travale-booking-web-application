"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";

export function DeleteModal({ id }) {
    console.log(id)
    const haldleDelete = async () => {
        const res = await fetch(`http://localhost:5000/destination/${id}`, {
            method: "DELETE",

        });
        const resData = await res.json()
        console.log(resData)
        console.log('click hocche',id)
        // console.log(data._id)
        redirect('/destinations')
    }
    return (
        <AlertDialog>
            <Button variant="danger">Delete Project</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>My Awesome Project</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={haldleDelete} slot="close" variant="danger">
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}