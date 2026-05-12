"use client";

// import { Envelope } from "@gravity-ui/icons";
import { Input, Label, TextField, FieldError, Select, ListBox, TextArea, Button, Modal, Surface } from "@heroui/react";
import { redirect } from "next/navigation";

export function WithForm({ data }) {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const fofmdata = Object.fromEntries(formData)
        console.log(data)


        const res = await fetch(`http://localhost:5000/destination/${data._id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fofmdata)
        });
        const resData = await res.json()
        console.log(resData)
        console.log(data._id)
        redirect('/destinations')
    }
    return (
        <Modal>
            <Button variant="secondary">Edit </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                {/* <Envelope className="size-5" /> */}
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit}
                                    className="p-10 space-y-8 border max-w-7xl mx-auto shadow"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Destination Name */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={data.destinationName} name="destinationName" isRequired>
                                                <Label>Destination Name</Label>
                                                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Country */}
                                        <TextField defaultValue={data.country} name="country" isRequired>
                                            <Label>Country</Label>
                                            <Input placeholder="Indonesia" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Category - Updated Select Component */}
                                        <div>
                                            <Select defaultValue={data.category}
                                                name="category"
                                                isRequired
                                                className="w-full"
                                                placeholder="Select category"
                                            >
                                                <Label>Category</Label>
                                                <Select.Trigger className="rounded-2xl">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox>
                                                        <ListBox.Item id="Beach" textValue="Beach">
                                                            Beach
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Mountain" textValue="Mountain">
                                                            Mountain
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="City" textValue="City">
                                                            City
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Adventure" textValue="Adventure">
                                                            Adventure
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Cultural" textValue="Cultural">
                                                            Cultural
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Luxury" textValue="Luxury">
                                                            Luxury
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>

                                        {/* Price */}
                                        <TextField defaultValue={data.price} name="price" type="number" isRequired>
                                            <Label>Price (USD)</Label>
                                            <Input
                                                type="number"
                                                placeholder="1299"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Duration */}
                                        <TextField defaultValue={data.duration} name="duration" isRequired>
                                            <Label>Duration</Label>
                                            <Input
                                                placeholder="7 Days / 6 Nights"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Departure Date */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={data.departureDate} name="departureDate" type="date" isRequired>
                                                <Label>Departure Date</Label>
                                                <Input type="date" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Image URL - Removed preview */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={data.imageUrl} name="imageUrl" isRequired>
                                                <Label>Image URL</Label>
                                                <Input
                                                    type="url"
                                                    placeholder="https://example.com/bali-paradise.jpg"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={data.description} name="description" isRequired>
                                                <Label>Description</Label>
                                                <TextArea
                                                    placeholder="Describe the travel experience..."
                                                    className="rounded-3xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                    </div>

                                    {/* Buttons */}

                                    <Button
                                        type="submit"
                                        variant="outline"

                                        className=" rounded-none w-full bg-cyan-500 text-white"
                                    >
                                        {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}

                                        Submit
                                    </Button>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}