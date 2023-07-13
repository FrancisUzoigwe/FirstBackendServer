import express, { Request, Response } from "express";
import simpleModel from "../model/simpleModel";
import bcrypt from "bcrypt"

export const view = async (req: Request, res: Response): Promise<Response> => {
  try {
    const view = await simpleModel.find();
    return res.status(200).json({
      message: "Viewing all",
      data: view,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured",
    });
  }
};

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password, userName, name } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)

    const user = await simpleModel.create({
      email,
      password: hash,
      userName,
      name,
    });
    return res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Unable to create user",
    });
  }
};


export const deleteuser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await simpleModel.findByIdAndRemove(req.params.id)
    return res.status(200).json({
      message: "User deleted successfully",
      data : user
    })
  } catch (error) {
    return res.status(400).json({
      message: "Unable to delete user",
    });
  }
  }
